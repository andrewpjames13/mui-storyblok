################################################################################
############################### SETUP ##########################################
################################################################################

# Specify the provider and access details
provider "aws" {
  version = "~> 2.15.0"

  shared_credentials_file = "$HOME/.aws/credentials"
  profile                 = "default"
  region                  = "us-west-2"
}

#backend config on aws s3
terraform {
  backend "s3" {
    bucket = "mui-storyblok-state"
    key    = "terraformstate"
    region = "us-west-2"
  }
}


################################################################################
############################### S3 Bucket #######################################
################################################################################

module "s3" {
  source         = "./modules/s3"
  bucket         = "mui-storyblok-docs.com"
  acl            = "public-read"
  index_document = "index.html"
  error_document = "index.html"
}


