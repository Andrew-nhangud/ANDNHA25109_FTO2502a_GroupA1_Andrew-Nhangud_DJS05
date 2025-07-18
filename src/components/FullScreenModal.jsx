import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/utils';

/**
 * FullScreenModal component for displaying podcast details in full screen.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.podcast - The podcast data to display.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @returns {JSX.Element|null} The rendered FullScreenModal component or null if closed.
 */
const FullScreenModal = ({ podcast, isOpen, onClose }) => {
  const [expandedSeason, setExpandedSeason] = useState(null);

  if (!isOpen || !podcast) return null; // Return null if modal is not open or no podcast data

  const seasonsArray = Array.from({ length: podcast.seasons }, (_, i) => ({
    id: i + 1,
    title: `Season ${i + 1}`,
    episodes: 0
  }));

  // Toggle the expanded season
  const toggleSeason = (seasonId) => {
    setExpandedSeason(expandedSeason === seasonId ? null : seasonId);
  };

  return (
    <div className={`full-screen-modal ${isOpen ? 'show' : ''}`}>
      <div className="full-screen-modal-content">
        <div className="full-screen-modal-header">
          <button className="back-btn" onClick={onClose}>
            &lt; Back to Podcast
          </button>
        </div>

        <div className="podcast-info-section">
          <img
            className="full-screen-modal-image"
            src={podcast.image}
            alt={`Cover art for ${podcast.title}`}
          />
          <div className="podcast-info-text">
            <h2>{podcast.title}</h2>
            <div className="genres">
              {podcast.genres?.length > 0 ? (
                podcast.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.title}
                    {index < podcast.genres.length - 1 ? ', ' : ''}
                  </span>
                ))
              ) : (
                <span>No genres available</span>
              )}
            </div>
            <p className="last-updated">
              Last updated: <span>{podcast.updated}</span>
            </p>
            <div className="seasons-count">
              {podcast.seasons > 0 
                ? `${podcast.seasons} season${podcast.seasons !== 1 ? 's' : ''}` 
                : "No seasons available"}
            </div>
            <p className="description">{podcast.description}</p>
          </div>
        </div>

        <div className="seasons-episodes-section">
          <h3>Seasons and Episodes</h3>
          
          {podcast.seasons > 0 ? (
            <div className="seasons-list">
              {seasonsArray.map((season) => (
                <div key={season.id} className="season-item">
                  <div 
                    className="season-header" 
                    onClick={() => toggleSeason(season.id)}
                    aria-expanded={expandedSeason === season.id}
                  >
                    <span className="season-title">{season.title}</span>
                    <span className="episodes-count">
                      {season.episodes} episode{season.episodes !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  {expandedSeason === season.id && (
                    <div className="season-episodes">
                      <div className="episode-placeholder">
                        Episode information coming soon! Check back later for updates.
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-seasons">
              This podcast currently has no seasons available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FullScreenModal.propTypes = {
  podcast: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })
    ),
    seasons: PropTypes.number,
    updated: PropTypes.string,
    description: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default FullScreenModal;
