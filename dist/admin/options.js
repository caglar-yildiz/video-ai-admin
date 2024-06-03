import { getModelByName } from '@adminjs/prisma';
import { prisma } from '../db/index.js';
import componentLoader from './component-loader.js';
const options = {
    componentLoader,
    rootPath: '/',
    resources: [
        {
            resource: { model: getModelByName('User'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Organization'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Subscription'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Country'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('NewsletterSubscriber'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Dubbing'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Language'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('Product'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('PaymentTransaction'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('ProductDescription'), client: prisma },
            options: {},
        },
        {
            resource: { model: getModelByName('FAQ'), client: prisma },
            options: {},
        }
    ],
    databases: [],
    branding: {
        companyName: 'Video AI',
        withMadeWithLove: false,
        logo: 'public/branding.png',
    },
};
export default options;
