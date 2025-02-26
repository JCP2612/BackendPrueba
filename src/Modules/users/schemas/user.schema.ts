import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  email?: string; // No opcional, ya que es requerido

  @Prop({ required: true })
  password?: string;

  @Prop({ required: true })
  name?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
