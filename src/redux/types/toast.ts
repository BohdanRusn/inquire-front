export enum ToastType{
    Error,
    Success
}

export interface ToastStateProps{
    toastType?: ToastType,
    message?: string
}