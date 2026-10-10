import prisma from '../../../config/prisma.js';

const getAllConfigs = async () => {
  const configs = await prisma.systemConfig.findMany();
  return configs;
};

const updateConfig = async (key: string, value: string) => {
  const config = await prisma.systemConfig.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });

  return config;
};

export const adminConfigService = {
  getAllConfigs,
  updateConfig,
};
