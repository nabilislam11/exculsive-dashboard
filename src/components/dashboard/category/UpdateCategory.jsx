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
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { useParams } from 'react-router';

const UpdateCategory = () => {
    const { id } = useParams();
    const [category, setCategory] = useState((null))
    const fetchCategory = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/v1/category/get-singlecategories/${id}`)
            setCategory(data.data);

        } catch (error) {
            console.log("Fetch failed:", error.response?.data || error.message);
        }

    }
    useEffect(() => {
        fetchCategory()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/api/v1/category/update-categories/${id}`, category)

        } catch (error) {
            console.log(error);


        }

    }
    return (
        <div>
            <div className="w-full max-w-md ">
                <form >
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend>Update Category</FieldLegend>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        onChange={(e) => setCategory({
                                            ...category, name: e.target.value
                                        })}
                                        id="name"

                                        placeholder="Name of Category "
                                        value={category?.name}

                                    />


                                </Field>

                            </FieldGroup>
                        </FieldSet>


                        <FieldSet>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                        Description
                                    </FieldLabel>
                                    <Input
                                        onChange={(e) => setCategory({
                                            ...category, description: e.target.value
                                        })}
                                        id="description"
                                        placeholder="Add category description"
                                        value={category?.description}

                                    />

                                </Field>
                            </FieldGroup>
                        </FieldSet>
                        <Field orientation="horizontal">
                            <Button type="submit" onClick={handleUpdate} className="bg-red-400 hover:bg-red-500 text-white dark:bg-red-700 dark:hover:bg-red-800" >Submit</Button>
                            <Button className="bg-black hover:bg-gray-800 text-white  ">
                                Cancel
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div >
        </div>
    )
}

export default UpdateCategory
