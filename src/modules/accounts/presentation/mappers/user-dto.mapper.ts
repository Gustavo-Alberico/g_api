import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserResponseDto } from '../dto/user-response.dto';

@Injectable()
export class UserDtoMapper {
  toResponseDto(user: UserEntity): UserResponseDto {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
      updatedAt: user.createdAt,
    };
  }
}
