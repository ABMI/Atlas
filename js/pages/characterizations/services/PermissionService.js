define([
    'services/AuthAPI',
], function (
    AuthAPI,
) {

    function isPermittedCreateCC() {
        return AuthAPI.isPermitted(`cohort-characterization:post`);
    }

    function isPermittedImportCC() {
        return AuthAPI.isPermitted(`cohort-characterization:import:post`);
    }

    function isPermittedGetCCList() {
        return AuthAPI.isPermitted(`cohort-characterization:get`);
    }

    function isPermittedGetCC(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:get`);
    }

    function isPermittedUpdateCC(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:put`);
    }

    function isPermittedDeleteCC(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:delete`);
    }

    function isPermittedGetCCGenerations(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:generation:get`);
    }

    function isPermittedGenerateCC(id, sourceKey) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:generation:*:post`) && AuthAPI.isPermitted(`source:${sourceKey}:access`);
    }

    function isPermittedGetCCGenerationResults(sourceKey) {
        return AuthAPI.isPermitted(`cohort-characterization:generation:*:result:get`) && AuthAPI.isPermitted(`source:${sourceKey}:access`);
    }

    function isPermittedExportGenerationDesign(id) {
        return AuthAPI.isPermitted(`cohort-characterization:generation:${id}:design:get`);
    }

    function isPermittedExportCC(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:export:get`);
    }

    function isPermittedCopyCC(id) {
        return AuthAPI.isPermitted(`cohort-characterization:${id}:post`);
    }

    //

    function isPermittedGetFaList() {
        return AuthAPI.isPermitted(`feature-analysis:get`);
    }

    function isPermittedCreateFa() {
        return AuthAPI.isPermitted(`feature-analysis:post`);
    }

    function isPermittedGetFa(id) {
        return AuthAPI.isPermitted(`feature-analysis:${id}:get`);
    }

    function isPermittedUpdateFa(id) {
        return AuthAPI.isPermitted(`feature-analysis:${id}:put`);
    }

    function isPermittedDeleteFa(id) {
        return AuthAPI.isPermitted(`feature-analysis:${id}:delete`);
    }

    return {
        isPermittedCreateCC,
        isPermittedImportCC,
        isPermittedGetCCList,
        isPermittedGetCC,
        isPermittedUpdateCC,
        isPermittedDeleteCC,
        isPermittedGetCCGenerations,
        isPermittedGenerateCC,
        isPermittedGetCCGenerationResults,
        isPermittedExportGenerationDesign,
        isPermittedExportCC,
        isPermittedCopyCC,
        //
        isPermittedGetFaList,
        isPermittedCreateFa,
        isPermittedGetFa,
        isPermittedUpdateFa,
        isPermittedDeleteFa
    };
});
