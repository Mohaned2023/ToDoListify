import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'src/config/jwt.config';
import { JwtStrategy } from './jwt.strategy';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register(jwtConfig),
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [JwtStrategy],
    exports: [JwtModule]
})
export class AuthModule {}
