import {Field, Form, Formik, FormikValues} from "formik";
import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../../redux/selectors/users-selectors";

type PropsType = {
    onFilterChange: (filter: FormikValues) => void
}

const usersSearchFormValidate = (values: any) => {
    return {}
}

const UserSearchForm: FC<PropsType> = React.memo((props) => {
    const filter = useSelector(getUsersFilter)

    const submitForm = (values: FormikValues, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FormikValues = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true"
        }
        setTimeout(() => {
            props.onFilterChange(filter)
            setSubmitting(false)
        }, 1000)
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: filter.friend}}
                validate={usersSearchFormValidate}
                onSubmit={submitForm}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type={"text"} name={"term"}></Field>
                        <Field name={"friend"} as={"select"}>
                            <option value={"null"}>All</option>
                            <option value={"true"}>Only followed</option>
                            <option value={"false"}>Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>Find</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
})

export default UserSearchForm;