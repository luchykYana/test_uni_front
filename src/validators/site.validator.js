import Joi from 'joi';

export const siteValidator = Joi.object({
    statistic: Joi
        .number(),
    plus: Joi
        .number(),
    dayOfWar: Joi
        .number()
})
