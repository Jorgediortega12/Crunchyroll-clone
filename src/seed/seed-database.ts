import prisma from '../lib/prisma';
import { intialData } from './seed';


async function main() {

    //eliminar los usuarios cuando lo tengamos creados en nuestro schema de prisma.
    await prisma.users.deleteMany();

    const { users } = intialData; 

    await prisma.users.createMany({
        data: users
    }); 

    console.log('Seed ejecutado correctamente');
}



(() => {

    if (process.env.NODE_ENV === 'production') return null;

    main();
})()