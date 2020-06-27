import {Resolver, Query, Mutation, Arg, Int} from 'type-graphql'
import {Product} from '../entity/Product'

@Resolver()
export class ProductResolver {
    @Mutation(() => Boolean)
    async createProducts(
        @Arg('name') name: string,
        @Arg('quantity') quantity: number
    ) {
        await Product.insert({ name, quantity })
        console.log(name, quantity)
        return true
    }

    @Query(() => [Product])
    getProducts() {
        return Product.find()
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('id', () => Int) id: number) {
        const response = await Product.delete(id)
        return response.affected === 1 ? true : false
    }

}
