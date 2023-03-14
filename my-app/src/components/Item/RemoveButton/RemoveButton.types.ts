export type Id = number;

export interface Props {
    id: Id,
    onClick: (id: Id) => void
}