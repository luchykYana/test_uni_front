import Joi from 'joi';

export const newsValidator = Joi.object({
    title: Joi
        .string()
        .min(10)
        .max(200)
        .required()
        .trim()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 10',
            'string.max': 'максимальна кількість символів 200'
        }),

    text: Joi
        .string()
        .trim()
        .required()
        .min(100)
        .max(1000)
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 100',
            'string.max': 'максимальна кількість символів 1000'
        }),

    mainPhoto: Joi
        .string()
        .trim(),

    photos: Joi
        .string(),

    country: Joi
        .string()
        .required(),
})
