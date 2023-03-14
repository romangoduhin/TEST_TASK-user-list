export interface UserGeo {
    lat: string,
    lng: string
}

export interface UserAddress {
    city: string,
    street: string,
    suite: string,
    zipcode: string,
    geo: UserGeo
}

export interface UserCompany {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface User {
    address: UserAddress,
    company: UserCompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

export interface Status {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string | null,
}

export type Users = Array<User>;

export interface ModalUserInfo {
    address: UserAddress | null,
    company: UserCompany | null
}

export interface InitialState {
    users: Users | null,
    status: Status,
    modalUserInfo: ModalUserInfo
}