import { CreatePersonInput } from './create-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {CreateAdressInput} from "../../adresses/dto/create-adress.input";
import { Gender } from "../../gender/gender.enum";

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int, { description: 'Id de la personne' })
  id: string;

  @Field(() => String, { description: 'Le nom de la personne' })
  name: string;

  @Field(() => Date, { description: "La date d'anniversaire de la personne" })
  birthday: Date;

  @Field(() => Gender, { description: 'Le genre de la personne' })
  gender: Gender;

  @Field(() => CreateAdressInput, { description: 'Adresse de la personne' })
  adress: CreateAdressInput;
}
