import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Adress } from "../../adresses/entities/adress.entity";
import { Gender } from "../../gender/gender.enum";

@ObjectType()
export class Person {
  @Field(() => Int, { description: 'Id de la personne' })
  id: number;

  @Field(() => String, { description: 'Le nom de la personne' })
  name: string;

  @Field(() => Date, { description: "La date d'anniversaire de la personne" })
  birthday: Date;

  @Field(() => Gender, { description: 'Le genre de la personne' })
  gender: Gender;

  @Field(() => Adress, { description: 'Adresse de la personne' })
  adress: Adress;
}
