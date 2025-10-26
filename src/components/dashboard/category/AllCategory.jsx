import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },

]

export default function AllCategory() {
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
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3000/api/v1/category/delete-categories/${id}`).then(() => fetchCategory())
        // fetchCategory()
    }
    return (
        <Table>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {category.map((category, index) => (
                    <TableRow key={category._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.description}</TableCell>
                        <Link to={`/update-category/${category._id}`}>
                            <Button className="bg-black hover:bg-gray-800 text-white  ">
                                Edit
                            </Button>
                        </Link>
                        <Button onClick={() => handleDelete(category._id)} className="mr-5 bg-red-400 hover:bg-red-500 text-white dark:bg-red-700 dark:hover:bg-red-800" type="submit">Delete</Button>

                    </TableRow>
                ))}
            </TableBody>

        </Table >
    )
}
