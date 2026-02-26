#!/bin/bash
 
if [[ $VERCEL_ENV == "production"  ]] ; then 
  npm run test:quick && npm run build:production
else 
  npm run test:quick && npm run build:preview
fi