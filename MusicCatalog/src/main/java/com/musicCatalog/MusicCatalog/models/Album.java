package com.musicCatalog.MusicCatalog.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.Nullable;

@Entity
@Table(name = "albums")
public class Album {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "album_id")
	private long id;

	@Column(name = "record_type")
	private final String recordType = "ALBUM";

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name="singer")
	@Nullable
	private Singer singer;

	@Column(name = "album")
	private String albumName;

	@Column(name = "year")
	@Nullable
	private String year;

	@Column(name = "company")
	private String company;

	public Album() {

	}

	public Album(long albumID, Singer singer, String album, String year, String company) {
		super();
		this.id = albumID;
		this.singer = singer;
		this.albumName = album;
		this.year = year;
		this.company = company;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Singer getSinger() {
		return singer;
	}

	public void setSinger(Singer singer) {
		this.singer = singer;
	}

	public String getAlbum() {
		return albumName;
	}

	public void setAlbum(String album) {
		this.albumName = album;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

}
