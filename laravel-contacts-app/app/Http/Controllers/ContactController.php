<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;


class ContactController extends Controller
{
    // All
    public function allContacts()
    {
        $contacts = Contacts::all();
        
        $respond = [
           'status' => '200',
            'message' => 'All contacts',
            'data' => $contacts
        ];
        return $respond;
    }

    // By ID
    public function getContactById($id)
    {

        $contact = Contacts::find($id);
        if (isset($contact)) {
           
            $respond = [
                'status' => '200',
                'message' => 'contact found',
                'data' => $contact
            ];
            return $respond;
        }
        $respond = [
            'status' => '401',
            'message' => 'contact not found',
            'data' => null
        ];
        return $respond;
    }

    //  Create 
    public function addContact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:contacts,email',
            'phone_number' => 'required|integer|digits:8',
            'country' => 'required|string|max:255',
            'city' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            $respond = [
                'status' => 401,
                'message' =>  $validator->errors()->first(),
                'data' => null,
            ];
            return $respond;
        }

        $contact = new Contacts();
      
        $contact->full_name = $request->full_name;
        $contact->email = $request->email;
        $contact->phone_number = $request->phone_number;
        $contact->country = $request->country;
        $contact->city = $request->city;
        $contact->save();

         $respond = [
            'status' => 200,
            'message' => 'New contact was added successfully!',
            'data' => $contact,
        ];
        return $respond;
    }

    //  Update
    public function updateContact(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'sometimes|required|string|max:255',
            'email' => [
                'sometimes',
                'required',
                'email',
                Rule::unique('contacts')->ignore($id),
            ],
            'phone_number' => 'sometimes|required|integer|digits:8',
            'country' => 'sometimes|required|string|max:255',
            'city' => 'sometimes|required|string|max:255',
        ]);
        
        if ($validator->fails()) {
            $respond = [
                'status' => 401,
                'message' =>  $validator->errors()->first(),
                'data' => null,
            ];
            return $respond;
        }
        $validator->validate();

        $cc = Contacts::find($id);
    
        if (isset($cc)) {  
            $fieldsToUpdate = $request->only(['full_name', 'email', 'phone_number', 'country', 'city']);

        $cc->update($fieldsToUpdate);
 

            $respond = [
                'status' => 201,
                'message' =>  "Contact updated successfully",
                'data' => $cc,
            ];

            return $respond;
        }
        $respond = [
            'status' => 401,
            'message' =>  "Contact with id=$id doesn't exist",
            'data' => null,
        ];
        return $respond;
 
    }
     
    //  Delete
    public function deleteContact($id)
    {
        $cc = Contacts::find($id);
        if (isset($cc)) {
            $cc->delete();
            $allContacts = Contacts::all();

            $respond = [
                'status' => 401,
                'message' =>  "Contact successfully deleted",
                'data' => $allContacts,
            ];
        } else {
            $respond = [
                'status' => 401,
                'message' =>  "Contact with id=$id doesn't exist",
                'data' => null,
            ];
        }
        return $respond;
    }
}
