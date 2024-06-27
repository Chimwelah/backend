import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { Employee } from './entities/employee.entity';
import { get } from 'http';

@Controller('employees')
export class EmployeesController {

    constructor(
        private readonly employeesService: EmployeesService
    ){}


  @Get()
  getEmployees(): Promise<Employee[]>{
    return this.employeesService.getEmployees();
  }

  @Post()
  addEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee>{
    return this.employeesService.addEmployee(createEmployeeDto);
  }


  @Delete(':id')
  deleteEmployee(@Param('id') id: number){
    return this.employeesService.deleteEmployee(id);
  }

  @Get(':id')
  async findOne(@Param('id')id: number): Promise<Employee>{
    const user = await this.employeesService.findOne(id);
    if (!user){
        throw new NotFoundException('user does not exist');
    }
    else{
        return user;
    }
  }

  @Put(':id')
  async update(@Param('id')  id:number, @Body() employee:Employee): Promise<any>{
   return this.employeesService.update(id,employee);
  }

}
