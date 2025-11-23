import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

import { Image as ImageIcon } from "lucide-react"; // optional fallback
import { Link } from "react-router";

export default function AllProduct() {
    // const [category, setCategory] = useState([])
    // const fetchCategory = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:3000/api/v1/category/get-allcategories")
    //         setCategory(data.data);


    //     } catch (error) {
    //         console.log(error);

    //     }

    // }

    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:3000/api/v1/product/get-allproduct"
            );
            setProducts(data.data);
            console.log(data.data); // 👈 check structure
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
        // fetchCategory();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:3000/api/v1/product/delete-product/${id}`
            );
            fetchProduct();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>List</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Subcategory</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
                    <TableRow key={product._id}>
                        <TableCell>{index + 1}</TableCell>

                        {/* ✅ Image show */}
                        <TableCell>
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-12 rounded-md object-cover border"
                                />
                            ) : (
                                <ImageIcon className="w-10 h-10 text-gray-400" />
                            )}
                        </TableCell>

                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>

                        {/* ✅ Proper case names */}
                        <TableCell>{product.category?.name}</TableCell>
                        {
                            <TableCell >
                                {product.subcategory ? product.subcategory?.name : product.category?.subcategory?.map((sub, i, arr) => (
                                    <p key={i}>{sub?.name}{arr.length > 1 && i != arr.length - 1 ? ',' : ''}</p>
                                ))}
                            </TableCell>
                        }

                        <TableCell className="flex gap-2">
                            <Link to={`/update-product/${product._id}`}>
                                <Button className="bg-black hover:bg-gray-800 text-white">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-600 text-white"
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
