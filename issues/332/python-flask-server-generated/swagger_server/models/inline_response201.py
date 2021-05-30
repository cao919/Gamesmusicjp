# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.object import Object  # noqa: F401,E501
from swagger_server import util


class InlineResponse201(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: OneOfinlineResponse201Id=None):  # noqa: E501
        """InlineResponse201 - a model defined in Swagger

        :param id: The id of this InlineResponse201.  # noqa: E501
        :type id: OneOfinlineResponse201Id
        """
        self.swagger_types = {
            'id': OneOfinlineResponse201Id
        }

        self.attribute_map = {
            'id': 'id'
        }
        self._id = id

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse201':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_201 of this InlineResponse201.  # noqa: E501
        :rtype: InlineResponse201
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> OneOfinlineResponse201Id:
        """Gets the id of this InlineResponse201.

        Unique ID of the created User.  Exact type/format will depend on your implementation but will likely be either an integer or a string.   # noqa: E501

        :return: The id of this InlineResponse201.
        :rtype: OneOfinlineResponse201Id
        """
        return self._id

    @id.setter
    def id(self, id: OneOfinlineResponse201Id):
        """Sets the id of this InlineResponse201.

        Unique ID of the created User.  Exact type/format will depend on your implementation but will likely be either an integer or a string.   # noqa: E501

        :param id: The id of this InlineResponse201.
        :type id: OneOfinlineResponse201Id
        """

        self._id = id
