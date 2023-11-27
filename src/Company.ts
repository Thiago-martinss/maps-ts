import { faker } from "@faker-js/faker"; 


export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.person.firstName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    };
};