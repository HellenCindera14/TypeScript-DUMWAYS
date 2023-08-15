import * as Joi from "joi"

export const createdThreadScheme = Joi.object().keys({
    content: Joi.string().required(),
    image: Joi.string(),
})
