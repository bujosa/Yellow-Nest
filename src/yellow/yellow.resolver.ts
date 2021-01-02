import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FilterInput } from 'src/common/graphql/inputs/graphql-filter.input';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { GetColorByIdInput } from './graphql/inputs/get-color-by-id.input';
import { UpdateColorInput } from './graphql/inputs/update-color.input';
import { Color } from './graphql/types/color.type';
import { YellowService } from './yellow.service';

@Resolver((of) => Color)
export class YellowResolver {
  constructor(private yelloService: YellowService) {}

  @Query((returns) => Color)
  public async getColorById(
    @Args('input') getColorByIdInput: GetColorByIdInput,
  ): Promise<Color> {
    return this.yelloService.getColorById(getColorByIdInput);
  }

  @Mutation((of) => Color)
  public async createColor(
    @Args('input') createColorInput: CreateColorInput,
  ): Promise<Color> {
    return this.yelloService.createColor(createColorInput);
  }

  @Query((returns) => [Color])
  public async getAllColors(
    @Args('input', { nullable: true, defaultValue: {} })
    filterInput: FilterInput,
  ): Promise<Color[]> {
    return this.yelloService.getAllColors(filterInput);
  }

  @Mutation((of) => Color)
  public async updateBrand(
    @Args('input') updateColorInput: UpdateColorInput,
  ): Promise<Color> {
    return this.yelloService.updateColor(updateColorInput);
  }
}
