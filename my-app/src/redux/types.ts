export interface UserGeo {
    lat: string,
    lng: string,
}

export interface UserAddress {
    city: string,
    street: string,
    suite: string,
    zipcode: string,
    geo: UserGeo,
}

export interface UserCompany {
    bs: string,
    catchPhrase: string,
    name: string,
}

export interface User {
    address: UserAddress,
    company: UserCompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export interface Status {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string | null,
}

export interface State {
    users: User[] | null,
    status: Status,
    selectedUser: User | null,
}