export function generateJson(
    fwCheckSum,
    fileName,
    fileType,
    manufactureName,
    supplierName,
    subType,
    pkgType,
    sbomComponenentName,
    sbomComponentVersion,
    namespace,
    sbomAutocorrection,
    sbomLicenseCorrection
) {
    let jsonBody = {
        type: "catalog",
        subType: subType,
        checksum: fwCheckSum,
        fileName: fileName,
        silentMode: true,
        fileType: fileType,
    };
    let component = undefined;
    if (
        isDefined(pkgType) &&
        isDefined(sbomComponenentName) &&
        isDefined(sbomComponentVersion)
    ) {
        component = {
            pkgType: pkgType,
            name: sbomComponenentName,
            version: sbomComponentVersion
        };
        if (isDefined(namespace))
            component['namespace'] = namespace;
    }
    if (isDefined(manufactureName))
        jsonBody["manufactureName"] = manufactureName;
    if (isDefined(supplierName)) jsonBody["supplierName"] = supplierName;
    if (component !== undefined) jsonBody["sbomComponent"] = component;
    // if (isDefined(sbomAutocorrection) && (typeof sbomAutocorrection == 'boolean')) jsonBody["sbomAutoCorrection"] = sbomAutocorrection;
    // if (isDefined(sbomLicenseCorrection) && (typeof sbomLicenseCorrection == 'boolean')) jsonBody["sbomLicenseCorrection"] = sbomLicenseCorrection;
   
    // console.log(jsonBody);
    return jsonBody;
};

function isDefined(inputVar) {
    return (inputVar && inputVar.trim() !== '')
}