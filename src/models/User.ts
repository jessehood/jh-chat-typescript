import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export default class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: string;
}

/* example usage
const user = new User();
user.username = 'test-user';
const manager = getMongoManager();
await manager.save(user);

console.log(await manager.findOne(User));
*/