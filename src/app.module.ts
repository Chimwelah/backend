import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Mwai03',
      database: 'employees',
      entities: [Employee],
      synchronize: true,
      logging: true
    }),
    EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
