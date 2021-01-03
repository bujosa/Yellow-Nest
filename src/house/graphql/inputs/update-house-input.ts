import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { IUpdateHouseInput } from 'src/house/interfaces/update-house-input.interface';

@InputType()
export class UpdateHouseInput implements IUpdateHouseInput {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => ID)
  color: Schema.Types.ObjectId;

  @Field((type) => Int)
  rooms: number;
}
