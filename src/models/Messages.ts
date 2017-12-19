import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import User from './User';

@Entity()
export default class Messages {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    text: string;
}
