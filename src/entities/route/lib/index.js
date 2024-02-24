import appConfig from "../../../app/config/app"

export const route = (name) => {
    return appConfig.appPath + name;
}