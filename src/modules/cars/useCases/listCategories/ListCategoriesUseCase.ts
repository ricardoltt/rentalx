/* eslint-disable prettier/prettier */
import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoryRepository';

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
