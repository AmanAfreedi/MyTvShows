export interface Cast {
    person:    Person;
    
}


export interface Image {
    medium:   string;
    original: string;
}

export interface Person {
    id:       number;
    url:      string;
    name:     string;
    country:  Country;
    birthday: Date | null;
    deathday: null;
    gender:   Gender;
    image:    Image;
    updated:  number;
   
}

export interface Country {
    name:     Name;
    code:     Code;
    timezone: Timezone;
}

export enum Code {
    CA = "CA",
    GB = "GB",
    Us = "US",
}

export enum Name {
    Canada = "Canada",
    UnitedKingdom = "United Kingdom",
    UnitedStates = "United States",
}

export enum Timezone {
    AmericaNewYork = "America/New_York",
    AmericaToronto = "America/Toronto",
    EuropeLondon = "Europe/London",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}