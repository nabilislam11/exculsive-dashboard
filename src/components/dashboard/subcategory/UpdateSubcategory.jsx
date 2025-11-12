import React, { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import axios from 'axios';
import {
    Field,

    FieldGroup,
    FieldLabel,
    FieldLegend,

    FieldSet,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectLabel,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


const UpdateSubcategory = () => {


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




    const { id } = useParams();
    const [subCategory, setSubCategory] = useState((null))
    const fetchSubCategory = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/v1/subcategory/get-singlesubcategory/${id}`)
            setSubCategory(data.data);

        } catch (error) {
            console.log("Fetch failed:", error.response?.data || error.message);
        }

    }
    useEffect(() => {
        fetchSubCategory()
        fetchCategory()
    }, [])
    console.log(category);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/api/v1/subcategory/update-subcategory/${id}`, subCategory)
            toast.success("✅ Subcategory updated successfully!")
            setSubCategory({ name: "", description: "", category: "" })
        } catch (error) {
            console.log(error);
            toast.error("❌ Something went wrong!")


        }

    }
    const handleCancel = () => {
        setSubCategory({
            name: "",
            description: "",
            category: "",
        })
        toast.info()
    }
    return (
        <>
            <div>
                <div className="w-full max-w-md ">
                    <form >
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Update Subcategory</FieldLegend>
                                <FieldGroup className="my-2">
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                            Name
                                        </FieldLabel>
                                        <Input
                                            onChange={(e) => setSubCategory({
                                                ...subCategory, name: e.target.value
                                            })}
                                            id="name"

                                            placeholder="Name of Subcategory "
                                            value={subCategory?.name}

                                        />


                                    </Field>

                                </FieldGroup>
                            </FieldSet>


                            <FieldSet>
                                <FieldGroup className="my-2">
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                            Description
                                        </FieldLabel>
                                        <Input
                                            onChange={(e) => setSubCategory({
                                                ...subCategory, description: e.target.value
                                            })}
                                            id="description"
                                            placeholder="Add Subcategory description"
                                            value={subCategory?.description}

                                        />

                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <FieldGroup className="my-2" >
                                <Field>
                                    <Select onValueChange={(value) => setSubCategory({ ...subCategory, category: value, })} >
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
                                <Button type="submit" onClick={handleUpdate} className="bg-red-400 hover:bg-red-500 text-white dark:bg-red-700 dark:hover:bg-red-800" >Submit</Button>
                                <Button onClick={handleCancel} className="bg-black hover:bg-gray-800 text-white  ">
                                    Cancel
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </div >
            </div>
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

export default UpdateSubcategory
