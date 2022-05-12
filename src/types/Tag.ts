export interface Tag {
    name: string,
    filters: object,
    validation: {
        type: string,
        format: string,
        enum: Array<string>
    }
}