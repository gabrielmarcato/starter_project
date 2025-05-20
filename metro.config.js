// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('cjs');

module.exports = config;
