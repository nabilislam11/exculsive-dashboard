import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
    SelectLabel,
    SelectGroup,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useEffect, useState } from "react"


export default function CreateProduct() {
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [fromData, setFromdata] = useState({
        name: "",
        description: "",
        price: "",
        review: "",
        stock: "",
        discount: "",
        quantity: "",
        sold: "",
        image: null,
        rating: "",
        category: "",
        subcategory: "",
    })
    const fetchSubCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/v1/subcategory/get-allsubcategory")
            setSubCategory(data.data);
        } catch (error) {
            console.log(error);
        }
    }

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
        fetchSubCategory()
    }, [])
    console.log(category);
    console.log(subCategory);

    const handleFileChange = (e, file) => {
        console.log(e);
        console.log(file.files[0]);
        setFromdata((prev) => ({ ...prev, "image": file.files[0] }))

    }
    const handleChange = (field, value) => {
        setFromdata((prev) => ({ ...prev, [field]: value }))


    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(fromData);
        const dataToSend = new FormData();
        Object.entries(fromData).forEach(([key, value]) => {
            dataToSend.append(key, value)
        })
        await axios.post("http://localhost:3000/api/v1/product/create-product",
            dataToSend,
            {
                headers: {

                    "Content-Type": `multipart/form-data`,
                },
            })

    }
    return (
        <div className="w-full p-5">
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Create Product</FieldLegend>
                        <FieldDescription>
                            All Product create by this.
                        </FieldDescription>
                        <div className="flex gap-x-20">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Product Name
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        value={fromData.name}
                                        placeholder="Name of Category "
                                        required
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="price">
                                        Product Price
                                    </FieldLabel>
                                    <Input
                                        id="price"
                                        onChange={(e) => handleChange("price", e.target.value)}
                                        value={fromData.price}
                                        placeholder="Product Price"
                                        required
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="mage">
                                        Product Image
                                    </FieldLabel>
                                    <Input
                                        id="image"
                                        onChange={(e) => handleFileChange("image", e.target)}
                                        placeholder="image upload "
                                        required
                                        type="file"
                                    />
                                </Field>
                            </FieldGroup>
                        </div>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="stock">
                                    Product Stock
                                </FieldLabel>
                                <Textarea
                                    id="stock"
                                    onChange={(e) => handleChange("stock", e.target.value)}
                                    value={fromData.stock}
                                    placeholder="Add Product stock"
                                    className="resize-none  "
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="quantity">
                                    Product Quantity
                                </FieldLabel>
                                <Textarea
                                    id="quantity"
                                    onChange={(e) => handleChange("quantity", e.target.value)}
                                    value={fromData.quantity}
                                    placeholder="Add Product quantity"
                                    className="resize-none  "
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="rating">
                                    Product Rating
                                </FieldLabel>
                                <Textarea
                                    id="rating"
                                    onChange={(e) => handleChange("rating", e.target.value)}
                                    value={fromData.rating}
                                    placeholder="Add Product rating"
                                    className="resize-none  "
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="discount">
                                    Product Discount
                                </FieldLabel>
                                <Textarea
                                    id="discount"
                                    onChange={(e) => handleChange("discount", e.target.value)}
                                    value={fromData.discount}
                                    placeholder="Add Product discount"
                                    className="resize-none"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="description">
                                    Product Description
                                </FieldLabel>
                                <Textarea
                                    id="description"
                                    onChange={(e) => handleChange("description", e.target.value)}
                                    value={fromData.description}
                                    placeholder="Add Product description"
                                    className="resize-none  "
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldGroup className="my-2" >
                        <Field>
                            <FieldLabel htmlFor="category">
                                Product category
                            </FieldLabel>
                            <Select
                                id="category"
                                onValueChange={(value) => handleChange("category", value)}
                                value={fromData.category} >
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
                    <FieldGroup className="my-2" >
                        <Field>
                            <FieldLabel htmlFor="subcategory">
                                Product Subcategory
                            </FieldLabel>
                            <Select
                                id="subcategory"
                                onValueChange={(value) => handleChange("subcategory", value)}
                                value={fromData.subcategory} >
                                <SelectTrigger >
                                    <SelectValue placeholder="Select subCategory" />
                                </SelectTrigger>
                                <SelectContent className='my-5'>
                                    <SelectGroup>
                                        {
                                            subCategory.map((subCategory) => {
                                                return <SelectItem value={subCategory._id}> {subCategory.name} </SelectItem>
                                            })
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup >
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
