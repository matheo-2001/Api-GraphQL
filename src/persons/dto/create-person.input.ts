import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateAdressInput } from '../../adresses/dto/create-adress.input';
import { Gender } from '../../gender/gender.enum';



@InputType()
export class CreatePersonInput {
  @Field(() => Int, { description: 'ID de la personne' })
  id: string;

  @Field(() => String, { description: 'Le nom de la personne' })
  name: string;

  @Field(() => Date, { description: 'La date anniversaire de la personne' })
  birthdate: Date;

  @Field(() => CreateAdressInput, { description: 'Adresse de la personne' })
  adress: CreateAdressInput;
  
  @Field(() => String, { description: 'Le genre de la personne' })
  gender: Gender;

}
