# apigee-vault-nodejs
This is a Node.js application that uses Apigee vault.  

# Prereqs
To deploy this application you must have
1 Apigee public or on-premises access
2 You must install [apigeetool](https://www.npmjs.com/package/apigeetool)
3 Create a vault in your Apigee organization

# Create a Vault and add Items
Apigee [Vault documentation](http://docs.apigee.com/api-reference/api/vaults).

1. First [create a vault](http://docs.apigee.com/management/apis/post/organizations/%7Borg_name%7D/vaults) in your organization.  
Name the vault "vaulttest"

2. [Add an entry.](http://docs.apigee.com/management/apis/post/organizations/%7Borg_name%7D/vaults/%7Bvault_name_in_org%7D/entries)
Name the entry "key1".

# Deploy to Apigee Edge
1. clone this repository
2. `cd apigee-vault-nodejs`
3. Execute the following command. Make sure to add your username and environment name.
```
apigeetool deploynodeapp -u username -o org -e test -n 'vault-proxy' -d . -m vaulttest.js -b /vaulttest
```
