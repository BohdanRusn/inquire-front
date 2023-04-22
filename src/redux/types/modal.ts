export interface ModalParams {
    onSubmit?:(params:any) => void;
    onCancel?:(params:any) => void;
    type: ModalType;
    payload?: any;
    loading?: boolean;
}

export enum ModalType {
    RemoveComment = "RemoveComment",
    RemovePost = "RemovePost",
}

export interface ModalState extends ModalParams{
    isOpen: boolean;
}

export type ModalParamsState = {
    [keys in ModalType]?: ModalState;
}
