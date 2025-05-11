import { Controller, Post, Body, ConflictException } from '@nestjs/common';
import { SignUpDto } from '../dto/signup.dto';
import { SignUpUseCase } from '../../application/usecases/signup.use-case';
import { EmailAlreadyExistsError } from '../../domain/errors/email-already-exists.error';
import { UserDtoMapper } from '../mappers/user-dto.mapper';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private userDtoMapper: UserDtoMapper,
  ) {}

  @Post('signup')
  async signUp(@Body() data: SignUpDto) {
    try {
      const user = await this.signUpUseCase.execute(data);
      return this.userDtoMapper.toResponseDto(user);
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }
}
