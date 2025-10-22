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
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


export default function CreateProduct() {
    return (
        <div className="w-full p-5">

            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Create Product</FieldLegend>
                        <FieldDescription>
                            All Product create by this.
                        </FieldDescription>
                        <div className="flex gap-x-20">

                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                        Product Name
                                    </FieldLabel>
                                    <Input
                                        id="checkout-7j9-card-name-43j"
                                        placeholder="Name of Category "
                                        required
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                        Product Price
                                    </FieldLabel>
                                    <Input
                                        id="checkout-7j9-card-name-43j"
                                        placeholder="Product Price"
                                        required
                                    />
                                </Field>

                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                        Product Image
                                    </FieldLabel>
                                    <Input
                                        id="checkout-7j9-card-name-43j"
                                        placeholder="Name of Category "
                                        required

                                    />
                                </Field>

                            </FieldGroup>
                        </div>
                    </FieldSet>


                    <FieldSet>
                        <FieldGroup>
                            <Field className="w-[600px]">
                                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                    Product Description
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"
                                    placeholder="Add Product description"
                                    className="resize-none  "
                                />
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
