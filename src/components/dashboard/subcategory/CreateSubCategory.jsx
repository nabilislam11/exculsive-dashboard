import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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
    SelectLabel,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";


export default function CreateSubCategory() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm()
    console.log(errors);


    const [category, setCategory] = useState([])
    const fetchCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/v1/category/get-allcategories")
            setCategory(data.data);


        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        fetchCategory()
    }, [])
    console.log(category);


    const onSubmit = async (data) => {

        console.log(data);
        try {
            await axios.post("http://localhost:3000/api/v1/subcategory/create-subcategory", data)
            toast.success("✅ Subcategory created successfully!")
            reset();

        } catch (error) {
            console.log(error);

            toast.error("❌ Something went wrong!")

        }
    }
    const handleCancel = () => {
        reset();
        toast.info("Form cleared!");
    }
    return (
        <>
            <div className="w-full max-w-md ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend>SubCreate Category</FieldLegend>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        placeholder="Name of Subcategory "
                                        {...register("name", { required: "SubCategory name is required" })}
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
                                        placeholder="Add Subcategory description"
                                        {...register("description", { required: "Subcategory description is required" })}
                                    />
                                    {errors.description && (
                                        <p className=" text-red-500">{errors.description.message}</p>
                                    )}
                                </Field>
                            </FieldGroup>
                        </FieldSet>

                        <FieldGroup>
                            <Field>
                                <Select onValueChange={(value) => { setValue("category", value) }} >
                                    <SelectTrigger >
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent className='my-5'>
                                        <SelectGroup>
                                            {
                                                category.map((cat) => {
                                                    return <SelectItem value={cat._id}> {cat.name} </SelectItem>
                                                })
                                            }
                                        </SelectGroup>

                                    </SelectContent>
                                </Select>
                            </Field>
                        </FieldGroup >
                        <Field orientation="horizontal">
                            <Button className="bg-red-400 hover:bg-red-500 text-white dark:bg-red-700 dark:hover:bg-red-800" type="submit">Create</Button>
                            <Button onClick={handleCancel} className="bg-black hover:bg-gray-800 text-white  ">
                                Cancel
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div >
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

        </>
    )
}
