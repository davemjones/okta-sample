## OKTA React Sample
https://github.com/okta-samples/okta-react-sample

## Simple.css
https://simplecss.org/

## Custom Field Attribute
To add a custom field to user profile settings in Okta, you need to follow these steps:

1. **Log in to Okta Admin Console:**
   - Go to your Okta organization's URL (e.g., `https://yourcompany.okta.com`).
   - Log in with your administrator credentials.

2. **Navigate to Directory:**
   - From the Admin Console, go to the left-hand menu and select `Directory`.

3. **Profile Editor:**
   - Under `Directory`, select `Profile Editor`.
   - You'll see a list of all the applications and directories integrated with Okta. Find and select `Okta`.

4. **Edit User Profile:**
   - Click on the `Profile` button next to `Okta` in the Profile Editor.
   - You will be directed to the `Profile Editor` for Okta.

5. **Add Attribute:**
   - On the `Profile Editor` page, you’ll see the `Attributes` tab.
   - Click on `Add Attribute`.
   - In the `Add Attribute` form, fill in the required fields:
     - **Display Name**: The name of the custom field as it will appear in the user profile.
     - **Variable Name**: The name used in API requests.
     - **Description**: A brief description of the custom field.
     - **Type**: Select the appropriate type for the field (e.g., string, integer, boolean).
     - **Attribute Required**: Check this box if the field is required.
   - Click `Save` to add the custom attribute.

6. **Mapping Attributes:**
   - If you need to map this custom attribute to attributes in other applications, click on the `Mappings` tab.
   - Select `Okta User to App User` or `App User to Okta User` depending on your requirements.
   - Set the mappings accordingly and click `Save Mappings`.

7. **Testing:**
   - Navigate to `Directory` > `People` and select a user.
   - Click on the `Profile` tab and check if the custom field appears and can be edited.

By following these steps, you can successfully add a custom field to the user profile settings in Okta. If you have any specific needs or run into issues, feel free to ask!

