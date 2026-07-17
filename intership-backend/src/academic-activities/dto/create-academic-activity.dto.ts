import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsArray } from 'class-validator';

export class CreateAcademicActivityDto {
  @IsString()
  @IsNotEmpty()
  badge: string;

  @IsString()
  @IsNotEmpty()
  badgeType: string;

  @IsString()
  @IsNotEmpty()
  section: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  info: string;

  @IsString()
  @IsNotEmpty()
  materia: string;

  @IsString()
  @IsOptional()
  nota?: string;

  @IsBoolean()
  @IsOptional()
  hasActions?: boolean;

  @IsBoolean()
  @IsOptional()
  checkmark?: boolean;

  @IsBoolean()
  @IsOptional()
  trophy?: boolean;

  @IsString()
  @IsOptional()
  customTrophyText?: string;

  @IsBoolean()
  @IsOptional()
  hasCert?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  takeaways?: string[];
}
