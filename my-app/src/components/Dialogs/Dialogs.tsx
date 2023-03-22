import React, {FC} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthString, required} from "../../utils/validators";
import {DialogType, MessageType} from "../../redux/message-reducer";

const maxLengthString50 = maxLengthString(50);

type PropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    sendMessage: (messageText: string) => void
}

type PropsFormType = {}

export type NewMessageFormValuesType = {
    fieldDialogsMessage: string
}

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>

const Dialogs: FC<PropsType> = (props) => {

    let dataPersons = props.dialogs.map(
        (dialogElement) => {
            return <DialogItem name={dialogElement.name} id={dialogElement.id}></DialogItem>
        }
    );

    let dataMessages = props.messages.map(
        (messageElement) => {
            return <DialogMessage message={messageElement.message}></DialogMessage>
        }
    );

    const sendMessageDialogs = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.fieldDialogsMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes["dialogs-items"]}>
                {dataPersons}
            </div>
            <div>
                {dataMessages}
            </div>
            <DialogsReduxForm onSubmit={sendMessageDialogs}/>
        </div>
    );
}

const DialogsForm: FC<InjectedFormProps<NewMessageFormValuesType, PropsFormType> & PropsFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter new message"
                       component={Textarea}
                       name={"fieldDialogsMessage"}
                       validate={[required, maxLengthString50]}>
                </Field>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

const DialogsReduxForm = reduxForm<NewMessageFormValuesType>(
    {form: 'dialogsMessage'}
)(DialogsForm)

export default Dialogs;