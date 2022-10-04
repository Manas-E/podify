export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "readaloud": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "readaloud": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "podify": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "predictions": {
        "pod": {
            "region": "string",
            "language": "string",
            "voice": "string"
        },
        "transpod": {
            "region": "string",
            "sourceLang": "string",
            "targetLang": "string"
        }
    }
}