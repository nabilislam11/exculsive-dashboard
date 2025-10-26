import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CreateCategory() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    console.log(errors);

    const onSubmit = (data) => {

        console.log(data);
        try {
            axios.post("http://localhost:3000/api/v1/category/create-category", data)

        } catch (error) {
            console.log(error);


        }
    }
    return (
        <div className="w-full max-w-md ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Create Category</FieldLegend>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    Name
                                </FieldLabel>
                                <Input
                                    id="name"
                                    placeholder="Name of Category "
                                    {...register("name", { required: "Category name is required" })}
                                />
                                {errors.name && (
                                    <p className=" text-red-500">{errors.name.message}</p>
                                )}

                            </Field>

                        </FieldGroup>
                    </FieldSet>


                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                    Description
                                </FieldLabel>
                                <Textarea
                                    id="description"
                                    placeholder="Add category description"
                                    {...register("description", { required: "Category description is required" })}
                                />
                                {errors.description && (
                                    <p className=" text-red-500">{errors.description.message}</p>
                                )}
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button className="bg-red-400 hover:bg-red-500 text-white dark:bg-red-700 dark:hover:bg-red-800" type="submit">Submit</Button>
                        <Button className="bg-black hover:bg-gray-800 text-white  ">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div >
    )
}
