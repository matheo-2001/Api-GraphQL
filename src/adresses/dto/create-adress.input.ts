import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdressInput {
  @Field(() => Int, { description: 'ID de la personne' })
  id: string;

  @Field(() => String, { description: 'La rue de la personne' })
  street: string;

  @Field(() => String, { description: 'La ville de la personne' })
  city: String;

  @Field(() => String, { description: 'Le pays de la personne' })
  country: String;

  @Field(() => Int, { description: 'Le code postale de la personne' })
  zipcode: number;
}
